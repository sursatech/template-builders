import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function App() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">
            React + Vite + TypeScript + Shadcn UI
          </h1>
          <p className="text-muted-foreground text-lg">
            A modern starter template with beautiful UI components
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>React 18</CardTitle>
              <CardDescription>
                Latest React with Hooks and Concurrent Features
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Build modern, performant user interfaces with the latest React features.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>TypeScript</CardTitle>
              <CardDescription>
                Type-safe development experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Catch errors early and enjoy better IDE support with TypeScript.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Vite</CardTitle>
              <CardDescription>
                Lightning-fast build tool
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Experience instant HMR and optimized builds with Vite.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Shadcn UI</CardTitle>
              <CardDescription>
                Beautiful, accessible components
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Copy-paste components built with Radix UI and Tailwind CSS.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tailwind CSS</CardTitle>
              <CardDescription>
                Utility-first CSS framework
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Rapidly build custom designs without leaving your HTML.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Dark Mode</CardTitle>
              <CardDescription>
                Built-in theme support
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Seamlessly switch between light and dark themes.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="border-primary">
          <CardHeader>
            <CardTitle>Get Started</CardTitle>
            <CardDescription>
              Start building your next project with this powerful starter template
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              This template includes everything you need to build modern web applications:
              React, TypeScript, Vite, Shadcn UI, and Tailwind CSS.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button>Primary Button</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Documentation</Button>
            <Button>Start Building</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default App
