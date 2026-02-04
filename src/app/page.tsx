import Image from "next/image";

import CodeBlock from "@/components/CodeBlock";
import {Button} from "@/components/lib/shadcn/ui/button";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/lib/shadcn/ui/card";

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col">
			<main className="flex-1 container max-w-5xl py-12 md:py-24 mx-auto px-4">
				{/* Hero Section with PluteoJS Branding */}
				<div className="text-center space-y-6 mb-16">
					<Image
						src="/images/pluteo-js-logo-transparent.svg"
						alt="PluteoJS Logo"
						width={120}
						height={120}
						className="mx-auto"
						priority
					/>
					<div className="space-y-2">
						<h1 className="text-4xl md:text-6xl font-bold tracking-tight">
							PluteoJS Next.js Starter
						</h1>
						<p className="text-sm text-muted-foreground">
							Created by{" "}
							<a
								href="https://swalahamani.com"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:underline font-medium"
							>
								Muhammad Swalah
							</a>{" "}
							at{" "}
							<a
								href="https://heedlabs.com"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:underline font-medium"
							>
								HeedLabs
							</a>
						</p>
					</div>
					<p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
						A production-ready Next.js TypeScript starter template with Redux
						Toolkit, Axios services, and shadcn/ui components.
					</p>
				</div>

				{/* Key Features */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12 mx-auto">
					<Card>
						<CardHeader>
							<CardTitle>Next.js 16 + React 19</CardTitle>
						</CardHeader>
						<CardContent>
							<p>
								Latest Next.js with App Router, Turbopack, and React 19 Server
								Components for optimal performance.
							</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>TypeScript First</CardTitle>
						</CardHeader>
						<CardContent>
							<p>
								Strict TypeScript configuration with comprehensive type safety,
								custom naming conventions, and ESLint integration.
							</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>Production Ready</CardTitle>
						</CardHeader>
						<CardContent>
							<p>
								Pre-configured with Husky, Commitlint, Prettier, and
								standard-version for professional development workflow.
							</p>
						</CardContent>
					</Card>
				</div>

				{/* Full-Stack Template Promotion */}
				<div className="my-16 mx-auto">
					<Card className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border-2">
						<CardContent className="p-8">
							<div className="flex flex-col md:flex-row items-center gap-6">
								<div className="flex-1 space-y-4">
									<h2 className="text-2xl font-bold">
										Need a Full-Stack Solution?
									</h2>
									<p className="text-muted-foreground">
										Check out the{" "}
										<strong>PluteoJS Full-Stack Monorepo Template</strong> - a
										complete TypeScript monorepo with Next.js frontend, Express
										API, Drizzle ORM, shared packages, and Turborepo for
										optimized builds.
									</p>
									<div className="flex gap-4">
										<a
											href="https://github.com/PluteoJS/pluteojs-template"
											target="_blank"
											rel="noopener noreferrer"
										>
											<Button>View Full-Stack Template</Button>
										</a>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>

				{/* Project Structure */}
				<div className="my-16 mx-auto">
					<h2 className="text-3xl font-bold mb-6 text-center">
						Project Structure
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
						<Card>
							<CardHeader>
								<CardTitle className="text-lg">App Structure</CardTitle>
							</CardHeader>
							<CardContent className="text-sm space-y-2">
								<p>
									<strong>src/app/</strong> - Next.js App Router pages
								</p>
								<p>
									<strong>src/components/</strong> - React components
								</p>
								<p>
									<strong>src/store/</strong> - Redux Toolkit state
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle className="text-lg">Services & Utils</CardTitle>
							</CardHeader>
							<CardContent className="text-sm space-y-2">
								<p>
									<strong>src/services/api/</strong> - Axios API services
								</p>
								<p>
									<strong>src/utils/</strong> - Helper utilities
								</p>
								<p>
									<strong>src/customTypes/</strong> - TypeScript types
								</p>
							</CardContent>
						</Card>
					</div>
				</div>

				{/* Development Commands */}
				<div className="my-16 mx-auto">
					<h2 className="text-3xl font-bold mb-6 text-center">
						Development Commands
					</h2>
					<div className="space-y-8 max-w-3xl mx-auto">
						<div>
							<h3 className="text-xl font-semibold mb-2">Development Server</h3>
							<CodeBlock className="text-sm mb-4 p-4 block">
								yarn start:dev
							</CodeBlock>
							<p className="text-muted-foreground text-sm">
								Starts the development server with Turbopack at
								http://localhost:3000
							</p>
						</div>
						<div>
							<h3 className="text-xl font-semibold mb-2">
								Build for Production
							</h3>
							<CodeBlock className="text-sm mb-4 p-4 block">
								yarn build
							</CodeBlock>
							<p className="text-muted-foreground text-sm">
								Creates an optimized production build in the .next folder
							</p>
						</div>
						<div>
							<h3 className="text-xl font-semibold mb-2">
								Code Quality Checks
							</h3>
							<CodeBlock className="text-sm mb-4 p-4 block">
								yarn lint
							</CodeBlock>
							<p className="text-muted-foreground text-sm">
								Runs ESLint and TypeScript checks to ensure code quality
							</p>
						</div>
						<div>
							<h3 className="text-xl font-semibold mb-2">
								Start Production Server
							</h3>
							<CodeBlock className="text-sm mb-4 p-4 block">
								yarn start:production
							</CodeBlock>
							<p className="text-muted-foreground text-sm">
								Serves the production build from the .next folder
							</p>
						</div>
					</div>
				</div>

				{/* Working with shadcn/ui */}
				<div className="my-16 mx-auto">
					<h2 className="text-3xl font-bold mb-6 text-center">
						Working with shadcn/ui
					</h2>
					<div className="space-y-8 max-w-3xl mx-auto">
						<div>
							<h3 className="text-xl font-semibold mb-2">
								Install a Component
							</h3>
							<CodeBlock className="text-sm mb-4 p-4 block">
								npx shadcn-ui@latest add button
							</CodeBlock>
							<p className="text-muted-foreground text-sm">
								Components are styled with Tailwind CSS and use Radix UI for
								accessibility
							</p>
						</div>
						<div>
							<h3 className="text-xl font-semibold mb-2">
								Component Import Path
							</h3>
							<CodeBlock className="text-sm mb-4 p-4 block">
								{`import { Button } from "@/components/lib/shadcn/ui/button"`}
							</CodeBlock>
							<p className="text-muted-foreground text-sm">
								Import components according to the configured aliases in
								components.json
							</p>
						</div>
						<div>
							<h3 className="text-xl font-semibold mb-2">
								Available Components
							</h3>
							<p className="text-muted-foreground mb-2">
								Run one of these commands to add more components:
							</p>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
								<CodeBlock className="text-xs p-2 block">
									npx shadcn-ui@latest add alert
								</CodeBlock>
								<CodeBlock className="text-xs p-2 block">
									npx shadcn-ui@latest add dialog
								</CodeBlock>
								<CodeBlock className="text-xs p-2 block">
									npx shadcn-ui@latest add dropdown-menu
								</CodeBlock>
								<CodeBlock className="text-xs p-2 block">
									npx shadcn-ui@latest add form
								</CodeBlock>
							</div>
						</div>
					</div>
				</div>

				{/* Built-in Features */}
				<div className="my-16 mx-auto">
					<h2 className="text-3xl font-bold mb-6 text-center">
						Built-in Features
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<Card>
							<CardHeader>
								<CardTitle>Redux Toolkit</CardTitle>
							</CardHeader>
							<CardContent>
								<p>
									Pre-configured state management with typed hooks, example
									slices, and Redux DevTools integration.
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>Axios Services</CardTitle>
							</CardHeader>
							<CardContent>
								<p>
									API service architecture with request/response interceptors
									for authentication and error handling.
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>shadcn/ui</CardTitle>
							</CardHeader>
							<CardContent>
								<p>
									Beautiful, accessible components built with Radix UI and
									Tailwind CSS for consistent design.
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>Git Workflow</CardTitle>
							</CardHeader>
							<CardContent>
								<p>
									Husky hooks, Commitlint with conventional commits, and
									standard-version for automated releases.
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>Code Quality</CardTitle>
							</CardHeader>
							<CardContent>
								<p>
									ESLint 9 flat config, Prettier formatting, and strict
									TypeScript for maintainable code.
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>Tailwind CSS 4</CardTitle>
							</CardHeader>
							<CardContent>
								<p>
									Latest Tailwind CSS with PostCSS integration and custom theme
									configuration for rapid styling.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</main>

			<footer className="border-t py-8">
				<div className="container flex flex-col items-center gap-6 mx-auto px-4">
					<div className="flex flex-col md:flex-row items-center justify-between w-full">
						<p className="text-sm text-muted-foreground">
							PluteoJS Next.js Starter - Production-ready template for modern
							web apps.
						</p>
						<div className="flex gap-6 mt-4 md:mt-0">
							<a
								href="https://nextjs.org"
								className="text-sm text-muted-foreground hover:underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								Next.js
							</a>
							<a
								href="https://typescriptlang.org"
								className="text-sm text-muted-foreground hover:underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								TypeScript
							</a>
							<a
								href="https://ui.shadcn.com"
								className="text-sm text-muted-foreground hover:underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								shadcn/ui
							</a>
							<a
								href="https://github.com/PluteoJS/pluteojs-template"
								className="text-sm text-muted-foreground hover:underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								Full-Stack Template
							</a>
						</div>
					</div>
					<div className="flex items-center gap-2 pt-4 border-t w-full justify-center flex-wrap">
						<span className="text-sm text-muted-foreground">Created by</span>
						<a
							href="https://swalahamani.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-sm font-medium hover:underline"
						>
							Muhammad Swalah
						</a>
						<span className="text-sm text-muted-foreground">at</span>
						<a
							href="https://heedlabs.com"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 hover:opacity-80 transition-opacity"
						>
							<Image
								src="/images/HeedLabs-Logo.avif"
								alt="HeedLabs Logo"
								width={24}
								height={24}
								className="rounded"
							/>
							<span className="text-sm font-medium">HeedLabs</span>
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
}
