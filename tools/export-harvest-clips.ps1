Add-Type -AssemblyName System.Runtime.WindowsRuntime

function Await-Operation($operation, [Type]$resultType) {
  $method = [System.WindowsRuntimeSystemExtensions].GetMethods() |
    Where-Object {
      $_.Name -eq 'AsTask' -and
      $_.IsGenericMethodDefinition -and
      $_.GetParameters().Count -eq 1
    } |
    Select-Object -First 1

  $task = $method.MakeGenericMethod($resultType).Invoke($null, @($operation))
  $task.Wait()
  return $task.Result
}

function Wait-AsyncAction($action) {
  $method = [System.WindowsRuntimeSystemExtensions].GetMethods() |
    Where-Object {
      $_.Name -eq 'AsTask' -and
      $_.IsGenericMethodDefinition -and
      $_.GetGenericArguments().Count -eq 1 -and
      $_.ReturnType.FullName -eq 'System.Threading.Tasks.Task' -and
      $_.GetParameters().Count -eq 1
    } |
    Select-Object -First 1

  $task = $method.MakeGenericMethod([Double]).Invoke($null, @($action))

  try {
    $task.Wait()
  }
  catch {
    $inner = if ($_.Exception.InnerException) { $_.Exception.InnerException.Message } else { $_.Exception.Message }
    throw "Transcode failed: $inner"
  }
}

[Windows.Storage.StorageFile, Windows.Storage, ContentType = WindowsRuntime] | Out-Null
[Windows.Storage.StorageFolder, Windows.Storage, ContentType = WindowsRuntime] | Out-Null
[Windows.Storage.CreationCollisionOption, Windows.Storage, ContentType = WindowsRuntime] | Out-Null
[Windows.Media.MediaProperties.MediaEncodingProfile, Windows.Media.MediaProperties, ContentType = WindowsRuntime] | Out-Null
[Windows.Media.MediaProperties.VideoEncodingQuality, Windows.Media.MediaProperties, ContentType = WindowsRuntime] | Out-Null
[Windows.Media.Transcoding.MediaTranscoder, Windows.Media.Transcoding, ContentType = WindowsRuntime] | Out-Null
[Windows.Media.Transcoding.PrepareTranscodeResult, Windows.Media.Transcoding, ContentType = WindowsRuntime] | Out-Null
[Windows.Foundation.AsyncStatus, Windows.Foundation, ContentType = WindowsRuntime] | Out-Null

$sourcePath = 'C:\Users\deepak.loura\Downloads\Cotton harvest.mp4'
$outputDir = 'C:\Users\deepak.loura\workspace\smartcotton-website\public\videos'

New-Item -ItemType Directory -Force -Path $outputDir | Out-Null
Remove-Item -LiteralPath (Join-Path $outputDir 'cotton-harvest-clip-01-0102-0110.mp4') -ErrorAction SilentlyContinue
Remove-Item -LiteralPath (Join-Path $outputDir 'cotton-harvest-clip-02-0109-0115.mp4') -ErrorAction SilentlyContinue
Remove-Item -LiteralPath (Join-Path $outputDir 'cotton-harvest-clip-03-0308-0315.mp4') -ErrorAction SilentlyContinue

$folder = Await-Operation ([Windows.Storage.StorageFolder]::GetFolderFromPathAsync($outputDir)) ([Windows.Storage.StorageFolder])
$profile = [Windows.Media.MediaProperties.MediaEncodingProfile]::CreateMp4([Windows.Media.MediaProperties.VideoEncodingQuality]::HD720p)

$ranges = @(
  @{ Name = 'cotton-harvest-hero-01-0102-0115.mp4'; Start = 62; End = 75; Label = '1:02-1:15' },
  @{ Name = 'cotton-harvest-hero-02-0308-0321.mp4'; Start = 188; End = 201; Label = '3:08-3:21' }
)

foreach ($range in $ranges) {
  $inputFile = Await-Operation ([Windows.Storage.StorageFile]::GetFileFromPathAsync($sourcePath)) ([Windows.Storage.StorageFile])
  $outputFile = Await-Operation ($folder.CreateFileAsync($range.Name, [Windows.Storage.CreationCollisionOption]::ReplaceExisting)) ([Windows.Storage.StorageFile])

  $transcoder = [Windows.Media.Transcoding.MediaTranscoder]::new()
  $transcoder.TrimStartTime = [TimeSpan]::FromSeconds($range.Start)
  $transcoder.TrimStopTime = [TimeSpan]::FromSeconds($range.End)

  $prepare = Await-Operation ($transcoder.PrepareFileTranscodeAsync($inputFile, $outputFile, $profile)) ([Windows.Media.Transcoding.PrepareTranscodeResult])

  if (-not $prepare.CanTranscode) {
    throw "Cannot transcode $($range.Name): $($prepare.FailureReason)"
  }

  Wait-AsyncAction ($prepare.TranscodeAsync())

  $clipPath = Join-Path $outputDir $range.Name
  $size = (Get-Item -LiteralPath $clipPath).Length
  Write-Output "$($range.Label) -> $($range.Name) ($size bytes)"
}
