"use client";
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from "recharts"

import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  MoreVertical,
  Truck,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

function PageMain() {
  return (
    <main className="grid flex-1 items-start gap-4 p-6 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          <Card x-chunk="dashboard-05-chunk-1 ">
            <CardHeader className="pb-2  bg-pink-300">
              <CardDescription>Available Position</CardDescription>
              <CardTitle className="text-4xl">24</CardTitle>
            </CardHeader>
            <CardContent className=" bg-pink-300">
              <div className="text-sm text-muted-foreground ">
                4 Urgently needed
              </div>
            </CardContent>

          </Card>
          <Card x-chunk="dashboard-05-chunk-1">
            <CardHeader className="pb-2 bg-indigo-400">
              <CardDescription>Job Open</CardDescription>
              <CardTitle className="text-4xl">10</CardTitle>
            </CardHeader>
            <CardContent className="bg-indigo-400">
              <div className="text-sm text-muted-foreground">
                4 Active hiring
              </div>
            </CardContent>

          </Card>
          <Card x-chunk="dashboard-05-chunk-2">
            <CardHeader className="pb-2 bg-pink-200">
              <CardDescription>New Employees</CardDescription>
              <CardTitle className="text-4xl">24</CardTitle>
            </CardHeader>
            <CardContent className="bg-pink-200">
              <div className="text-sm text-muted-foreground">
                4 Department
              </div>
            </CardContent>

          </Card>
        </div>
        <div className="grid gap-4 grid-col-1 sm:grid-cols-2 ">
          <Card
            className="flex flex-row max-h-44 " x-chunk="charts-01-chunk-1"
          >
            <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2 [&>div]:flex-1">
              <div>
                <CardDescription>Total Employees</CardDescription>
                <CardTitle className="flex items-baseline gap-1 text-4xl tabular-nums">
                  216
                  <span className="text-sm font-normal tracking-normal text-muted-foreground">
                    
                  </span>
                </CardTitle>
              </div>
              <div>


              </div>
            </CardHeader>
            <CardContent className="flex flex-1 items-center">
              <ChartContainer
                config={{
                  resting: {
                    label: "Resting",
                    color: "hsl(var(--chart-1))",
                  },
                }}
                className="w-full h-full"
              >
                <LineChart
                  accessibilityLayer
                  margin={{
                    left: 14,
                    right: 14,
                    top: 10,
                  }}
                  data={[
                    {
                      date: "2024-01-01",
                      resting: 62,
                    },
                    {
                      date: "2024-01-02",
                      resting: 72,
                    },
                    {
                      date: "2024-01-03",
                      resting: 35,
                    },
                    {
                      date: "2024-01-04",
                      resting: 62,
                    },
                    {
                      date: "2024-01-05",
                      resting: 52,
                    },
                    {
                      date: "2024-01-06",
                      resting: 62,
                    },
                    {
                      date: "2024-01-07",
                      resting: 70,
                    },
                  ]}
                >
                  <CartesianGrid
                    strokeDasharray="4 4"
                    vertical={false}
                    stroke="hsl(var(--muted-foreground))"
                    strokeOpacity={0.5}
                  />
                  <YAxis hide domain={["dataMin - 10", "dataMax + 10"]} />
                  <XAxis
                    dataKey="date"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value: string) => {
                      return new Date(value).toLocaleDateString("en-US", {
                        weekday: "short",
                      })
                    }}
                  />
                  <Line
                    dataKey="resting"
                    type="natural"
                    fill="var(--color-resting)"
                    stroke="var(--color-resting)"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{
                      fill: "var(--color-resting)",
                      stroke: "var(--color-resting)",
                      r: 4,
                    }}
                  />
                  <ChartTooltip
                    content={
                      <ChartTooltipContent
                        indicator="line"
                        labelFormatter={(value) => {
                          return new Date(value).toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })
                        }}
                      />
                    }
                    cursor={false}
                  />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>
          <Card
            className="flex flex-row max-h-44 " x-chunk="charts-01-chunk-1"
          >
            <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2 [&>div]:flex-1">
              <div>
                <CardDescription>Total Request</CardDescription>
                <CardTitle className="flex items-baseline gap-1 text-4xl tabular-nums">
                  16
                  <span className="text-sm font-normal tracking-normal text-muted-foreground">
                    
                  </span>
                </CardTitle>
              </div>
              <div>


              </div>
            </CardHeader>
            <CardContent className="flex flex-1 items-center">
              <ChartContainer
                config={{
                  resting: {
                    label: "Resting",
                    color: "hsl(var(--chart-1))",
                  },
                }}
                className="w-full h-full"
              >
                <LineChart
                  accessibilityLayer
                  margin={{
                    left: 14,
                    right: 14,
                    top: 10,
                  }}
                  data={[
                    {
                      date: "2024-01-01",
                      resting: 62,
                    },
                    {
                      date: "2024-01-02",
                      resting: 72,
                    },
                    {
                      date: "2024-01-03",
                      resting: 35,
                    },
                    {
                      date: "2024-01-04",
                      resting: 62,
                    },
                    {
                      date: "2024-01-05",
                      resting: 52,
                    },
                    {
                      date: "2024-01-06",
                      resting: 62,
                    },
                    {
                      date: "2024-01-07",
                      resting: 70,
                    },
                  ]}
                >
                  <CartesianGrid
                    strokeDasharray="4 4"
                    vertical={false}
                    stroke="hsl(var(--muted-foreground))"
                    strokeOpacity={0.5}
                  />
                  <YAxis hide domain={["dataMin - 10", "dataMax + 10"]} />
                  <XAxis
                    dataKey="date"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value: string) => {
                      return new Date(value).toLocaleDateString("en-US", {
                        weekday: "short",
                      })
                    }}
                  />
                  <Line
                    dataKey="resting"
                    type="natural"
                    fill="var(--color-resting)"
                    stroke="var(--color-resting)"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{
                      fill: "var(--color-resting)",
                      stroke: "var(--color-resting)",
                      r: 4,
                    }}
                  />
                  <ChartTooltip
                    content={
                      <ChartTooltipContent
                        indicator="line"
                        labelFormatter={(value) => {
                          return new Date(value).toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })
                        }}
                      />
                    }
                    cursor={false}
                  />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
        <Card x-chunk="dashboard-05-chunk-3">
          <CardHeader className="px-7">
            <CardTitle className="text-xl">Announcement</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableBody>
                <TableRow className="bg-accent">
                  <TableCell>
                    <div className="font-medium">Outing Schedule for every department</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      5 Minutes ago
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">

                  </TableCell>
                  <TableCell className="hidden sm:table-cell">

                  </TableCell>
                  <TableCell className="hidden md:table-cell">

                  </TableCell>
                  <TableCell className="text-right"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Meeting Hr Department</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      Yesterday 12:30 PM
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">

                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Badge className="text-xs" variant="outline">

                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">

                  </TableCell>
                  <TableCell className="text-right"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">It Department need two more talents for Ux/Ui Designer position</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      Yesterday, 09:15 AM
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">

                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Badge className="text-xs" variant="secondary">

                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">

                  </TableCell>
                  <TableCell className="text-right"></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="flex flex-row items-center justify-center text-base text-orange-600 font-semibold capitalize px-6 py-3">
            See All Announcements
          </CardFooter>
        </Card>
      </div>
      <div>
        <Card
          className="overflow-hidden" x-chunk="dashboard-05-chunk-4"
        >
          <CardHeader className="flex flex-row items-start bg-muted/50 bg-indigo-900">
            <div className="grid gap-0.5 ">
              <CardTitle className="group flex items-center gap-2 text-lg text-slate-50">
                Recently Activity
                <Button
                  size="icon"
                  variant="outline"
                  className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                >
                  <Copy className="h-3 w-3" />
                  <span className="sr-only">Copy Order ID</span>
                </Button>
              </CardTitle>
              <CardDescription className="text-slate-200">10:40 Am, Fri 10 Sept 2021</CardDescription>
            </div>
            <div className="ml-auto flex items-center gap-1">

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" variant="outline" className="h-8 w-8">
                    <MoreVertical className="h-3.5 w-3.5" />
                    <span className="sr-only">More</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Export</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Trash</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent className="p-6 text-sm bg-indigo-800">
            <div className="grid gap-3 ">
              <div className="font-semibold  text-slate-50">You Posted a New Job</div>
              <ul className="grid gap-3">
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground  text-slate-50">
                    Kindely check the requirements and terms of work and make sure everything is right. <span>2</span>
                  </span>
                  <span></span>
                </li>

              </ul>




              <div className="grid auto-rows-max gap-3">
                <div className="font-semibold"></div>
                <div className="text-muted-foreground  text-slate-50">
                  Today you makes 12 Activity
                </div>
              </div>
            </div>




          </CardContent>
        </Card>
        <Card x-chunk="dashboard-05-chunk-3">
          <CardHeader className="px-7">
            <CardTitle className="text-xl">Upcoming Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableBody>
                <TableRow className="bg-accent">
                  <TableCell>
                    <div className="font-medium"> Review candidate  application</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      Total - 11:30 AM
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">

                  </TableCell>
                  <TableCell className="hidden sm:table-cell">

                  </TableCell>
                  <TableCell className="hidden md:table-cell">

                  </TableCell>
                  <TableCell className="text-right"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Interview with candidates</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      Today - 10:30 Am
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">

                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Badge className="text-xs" variant="outline">

                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">

                  </TableCell>
                  <TableCell className="text-right"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Short meeting with product designer for It Departement</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      Total - 09:15 Am
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">

                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Badge className="text-xs" variant="secondary">

                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">

                  </TableCell>
                  <TableCell className="text-right"></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="flex flex-row items-center justify-center text-base text-orange-600 font-semibold capitalize px-6 py-3">
            Create a New Schedule
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}

export default PageMain
