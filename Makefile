# Makefile for Dr Chagger landing page
# Sections: project commands, git commands, composite workflows, help

.DEFAULT_GOAL := help

.PHONY: help dev build preview deploy git-add git-commit git-push git-all deploy-git

# --------------------
# Project commands
# --------------------

dev:
	@echo "Starting development server..."
	npm run dev

build:
	@echo "Building production bundle..."
	npm run build

preview:
	@echo "Previewing production build..."
	npm run preview

deploy:
	@echo "Deploying site..."
	npm run deploy

# --------------------
# Git commands
# --------------------

git-add:
	@echo "Staging all changes..."
	git add .

git-commit:
ifndef MSG
	$(error MSG variable is required. Example: make git-commit MSG="Your commit message")
endif
	@echo "Committing changes with message: ${MSG}"
	git commit -m "${MSG}"

git-push:
	@echo "Pushing current branch..."
	git push

git-all: git-add git-commit git-push
	@echo "Git add, commit, and push complete."

# --------------------
# Composite workflows
# --------------------

deploy-git: deploy git-add git-commit git-push
	@echo "Deployment and Git publish complete."

# --------------------
# Help menu
# --------------------

help:
	@echo "Makefile help for book-landing-page-final"
	@echo ""
	@echo "Usage: make <target> [MSG=\"Your commit message\"]"
	@echo ""
	@echo "Project commands:"
	@echo "  dev           Run npm run dev"
	@echo "  build         Run npm run build"
	@echo "  preview       Run npm run preview"
	@echo "  deploy        Run npm run deploy"
	@echo ""
	@echo "Git commands:"
	@echo "  git-add       Stage all changes"
	@echo "  git-commit    Commit changes with MSG variable"
	@echo "  git-push      Push current branch"
	@echo "  git-all       git-add, git-commit, and git-push"
	@echo ""
	@echo "Combined commands:"
	@echo "  deploy-git    Run npm run deploy then git add, commit, and push"
	@echo ""
	@echo "Examples:"
	@echo "  make dev"
	@echo "  make build"
	@echo "  make git-commit MSG=\"Update visitor counter\""
	@echo "  make deploy-git MSG=\"Deploy landing page\""
