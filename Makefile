.PHONY: dev build typecheck deploy

dev:
	pnpm dev

build:
	pnpm build

typecheck:
	pnpm typecheck

deploy:
	pnpm build
	git add .
	git diff-index --quiet HEAD || git commit -m "Deploy website update"
	git push
