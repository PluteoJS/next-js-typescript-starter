import CodeBlock from "@/components/CodeBlock";
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
				{/* Hero Section */}
				<div className="text-center space-y-4 mb-16">
					<h1 className="text-4xl md:text-6xl font-bold tracking-tight">
						Development Guide
					</h1>
					<p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
						Quick reference for working with this TypeScript and Next.js project
					</p>
				</div>

				{/* Features */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12 mx-auto">
					<Card>
						<CardHeader>
							<CardTitle>Type Safety</CardTitle>
						</CardHeader>
						<CardContent>
							<p>
								Catch errors during development with TypeScript's static
								type-checking and intelligent code completion.
							</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>Server Components</CardTitle>
						</CardHeader>
						<CardContent>
							<p>
								Build faster, more responsive apps with Next.js React Server
								Components and server-side rendering.
							</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>shadcn/ui Components</CardTitle>
						</CardHeader>
						<CardContent>
							<p>
								Utilize re-usable components built with Radix UI and Tailwind
								CSS for a consistent design system.
							</p>
						</CardContent>
					</Card>
				</div>

				{/* Package.json Scripts */}
				<div className="my-16 mx-auto">
					<h2 className="text-3xl font-bold mb-6 text-center">
						Package.json Scripts
					</h2>
					<div className="space-y-8 max-w-3xl mx-auto">
						<div>
							<h3 className="text-xl font-semibold mb-2">Development Server</h3>
							<CodeBlock className="text-sm mb-4 p-4 block">
								yarn start:dev
							</CodeBlock>
							<p className="text-muted-foreground text-sm">
								Starts the development server with Turbopack for faster
								refreshes at http://localhost:3000
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
								Start Production Server
							</h3>
							<CodeBlock className="text-sm mb-4 p-4 block">
								yarn start:production
							</CodeBlock>
							<p className="text-muted-foreground text-sm">
								Serves the production build from the .next folder
							</p>
						</div>
						<div>
							<h3 className="text-xl font-semibold mb-2">
								Code Quality and Checks
							</h3>
							<CodeBlock className="text-sm mb-4 p-4 block">
								yarn lint
							</CodeBlock>
							<p className="text-muted-foreground text-sm">
								Runs ESLint and TypeScript checks to ensure code quality
							</p>
						</div>
						<div>
							<h3 className="text-xl font-semibold mb-2">Format Code</h3>
							<CodeBlock className="text-sm mb-4 p-4 block">
								yarn format
							</CodeBlock>
							<p className="text-muted-foreground text-sm">
								Checks code formatting using Prettier
							</p>
						</div>
					</div>
				</div>

				{/* shadcn Installation */}
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
								import {"{ Button }"} from "@/components/lib/shadcn/ui/button"
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
									npx shadcn-ui@latest add card
								</CodeBlock>
								<CodeBlock className="text-xs p-2 block">
									npx shadcn-ui@latest add dialog
								</CodeBlock>
								<CodeBlock className="text-xs p-2 block">
									npx shadcn-ui@latest add dropdown-menu
								</CodeBlock>
							</div>
						</div>
					</div>
				</div>
			</main>

			<footer className="border-t py-8">
				<div className="container flex flex-col md:flex-row items-center justify-between mx-auto px-4">
					<p className="text-sm text-muted-foreground">
						Built with modern web technologies.
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
					</div>
				</div>
			</footer>
		</div>
	);
}
