import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Search, Heart, Gift, Users, FileText, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import RecentDeals from "@/components/recent-deals";

export default function DashboardPage() {
  const features = [
    {
      title: "Upload Special",
      description: "Share deals you find at stores",
      icon: Camera,
      href: "/dashboard/upload",
      color: "text-snagit-teal",
    },
    {
      title: "Browse Specials",
      description: "Find deals near you",
      icon: Search,
      href: "/dashboard/browse",
      color: "text-snagit-teal",
    },
    {
      title: "Favorites Board",
      description: "Track your favorite items",
      icon: Heart,
      href: "/dashboard/favorites",
      color: "text-snagit-teal",
    },
    {
      title: "Big-Ticket Tracker",
      description: "Save for expensive purchases",
      icon: Gift,
      href: "/dashboard/big-ticket",
      color: "text-snagit-teal",
    },
    {
      title: "Bulk Buying Club",
      description: "Join groups for bulk discounts",
      icon: Users,
      href: "/dashboard/bulk-buying",
      color: "text-snagit-teal",
    },
    {
      title: "Smart Catalogue",
      description: "Weekly store catalogue highlights",
      icon: FileText,
      href: "/dashboard/catalogues",
      color: "text-snagit-teal",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start">
          <h1 className="text-4xl font-bold tracking-tight text-snagit-teal">
            Snag
            <span className="relative">
              It
              <span className="absolute -bottom-1 -right-4">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ transform: "rotate(15deg)" }}
                >
                  <path
                    d="M6 2C5.44772 2 5 2.44772 5 3V21C5 21.5523 5.44772 22 6 22H18C18.5523 22 19 21.5523 19 21V7L14 2H6Z"
                    fill="#F4A261"
                  />
                  <path d="M14 2V7H19" />
                  <circle cx="10" cy="6" r="2" fill="white" />
                </svg>
              </span>
            </span>
          </h1>
        </div>
        <p className="mt-1 text-xl font-medium text-snagit-teal">Snap. Snag. Save.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="rounded-lg bg-snagit-teal p-2 text-white">
                  {<feature.icon className="h-5 w-5" />}
                </div>
                <div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full justify-between" asChild>
                  <Link href={feature.href}>
                    Explore <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Recent Deals</CardTitle>
              <CardDescription>Latest deals shared by the community</CardDescription>
            </CardHeader>
            <CardContent>
              <RecentDeals />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Your Favorite Items</CardTitle>
              <CardDescription>Track price changes on items you love</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-md bg-slate-100" />
                    <div>
                      <p className="font-medium">Organic Milk</p>
                      <p className="text-sm text-slate-500">Walmart</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-green-600">$3.49</p>
                    <p className="text-xs text-slate-500">Was $4.29</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-md bg-slate-100" />
                    <div>
                      <p className="font-medium">Chicken Breast</p>
                      <p className="text-sm text-slate-500">Costco</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-green-600">$2.99/lb</p>
                    <p className="text-xs text-slate-500">Was $3.79/lb</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-md bg-slate-100" />
                    <div>
                      <p className="font-medium">Coffee Beans</p>
                      <p className="text-sm text-slate-500">Target</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-green-600">$8.99</p>
                    <p className="text-xs text-slate-500">Was $12.99</p>
                  </div>
                </div>

                <Button variant="ghost" className="w-full justify-between" asChild>
                  <Link href="/dashboard/favorites">
                    View all favorites <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
