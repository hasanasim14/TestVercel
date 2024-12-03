"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Building2,
  Scale,
  MapPin,
  Mail,
  CheckCircle2,
  Search,
} from "lucide-react";
import { ClerkProvider, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";

interface Lead {
  _id: string;
  title: string;
  case_number: string;
  court: string;
  plaintiffs: string;
  defendants: string;
  work_email: string;
  filed_on: string;
  summary: string;
  postgrid_status: string;
  instantly_status: string;
}

interface PaginationData {
  current_page: number;
  total_pages: number;
}

interface ApiResponse {
  leads: Lead[];
  pagination: PaginationData;
}

export default function DashboardPage() {
  const [selectedLawyer, setSelectedLawyer] = useState<string>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [data, setData] = useState<ApiResponse>({
    leads: [],
    pagination: { current_page: 1, total_pages: 1 },
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterType, setFilterType] = useState<string>("all");
  const { isLoaded, userId } = useAuth();
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (user?.username) {
      const lawyer = user.username.split("_")[0];
      setSelectedLawyer(lawyer);
    }
  }, [user]);

  useEffect(() => {
    if (isLoaded && !userId) {
      router.push("/sign-in");
    }
  }, [isLoaded, userId, router]);

  const fetchData = useCallback(async () => {
    if (!selectedLawyer) return;

    setLoading(true);
    try {
      const response = await fetch(
        `https://lawyer-leads-312641433136.us-central1.run.app/leads/${selectedLawyer}?page=${currentPage}&page_size=10`
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  }, [selectedLawyer, currentPage]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const isFullyProcessed = (lead: Lead): boolean =>
    lead.postgrid_status === "sent" && lead.instantly_status === "sent";

  const filteredLeads = data.leads.filter((lead) => {
    const matchesSearch =
      lead.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.case_number.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterType === "all" ||
      (filterType === "post" && lead.postgrid_status === "sent") ||
      (filterType === "email" && lead.instantly_status === "sent");
    return matchesSearch && matchesFilter;
  });

  return (
    <ClerkProvider>
      <div className="min-h-screen bg-background text-foreground p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <h1 className="text-3xl font-bold color-[#e5e7eb]">
              Legal Cases Dashboard
            </h1>
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="relative flex-grow md:flex-grow-0">
                <Input
                  type="text"
                  placeholder="Search cases..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full bg-secondary text-secondary-foreground border-radius-class"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              </div>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-[180px] bg-secondary text-secondary-foreground border-radius-class">
                  <SelectValue placeholder="Filter by" />
                </SelectTrigger>
                <SelectContent className="border-radius-class">
                  <SelectItem value="all">All Cases</SelectItem>
                  <SelectItem value="post">Sent Post</SelectItem>
                  <SelectItem value="email">Sent Email</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-8">Loading...</div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-6">
                {filteredLeads.map((lead) => {
                  const processed = isFullyProcessed(lead);
                  return (
                    <Card
                      key={lead._id}
                      className={`bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow relative overflow-hidden
                      ${processed ? "border-2 border-green-500" : ""}`}
                    >
                      {processed && (
                        <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 rounded-bl-md text-sm font-medium flex items-center gap-1">
                          <CheckCircle2 className="h-4 w-4" />
                          Fully Processed
                        </div>
                      )}
                      <CardHeader className="bg-muted">
                        <CardTitle className="text-xl flex items-center gap-2">
                          <Scale className="h-5 w-5 text-primary" />
                          {lead.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <p className="text-sm flex items-center gap-2">
                              <Building2 className="h-4 w-4 text-muted-foreground" />
                              <span className="font-semibold">
                                Case Number:
                              </span>{" "}
                              {lead.case_number}
                            </p>
                            <p className="text-sm flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-muted-foreground" />
                              <span className="font-semibold">Court:</span>{" "}
                              {lead.court}
                            </p>
                          </div>
                          <div className="space-y-2">
                            <p className="text-sm">
                              <span className="font-semibold">Plaintiffs:</span>{" "}
                              {lead.plaintiffs}
                            </p>
                            <p className="text-sm">
                              <span className="font-semibold">Defendants:</span>{" "}
                              {lead.defendants}
                            </p>
                          </div>
                          <div className="space-y-2">
                            <p className="text-sm flex items-center gap-2">
                              <Mail className="h-4 w-4 text-muted-foreground" />
                              <span className="font-semibold">
                                Contact:
                              </span>{" "}
                              {lead.work_email}
                            </p>
                            <p className="text-sm">
                              <span className="font-semibold">Filed:</span>{" "}
                              {new Date(lead.filed_on).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="col-span-full">
                            <p className="text-sm">
                              <span className="font-semibold">Summary:</span>{" "}
                              {lead.summary}
                            </p>
                          </div>
                          <div className="col-span-full mt-2">
                            <div className="flex gap-2">
                              <div
                                className={`px-3 py-1 rounded-md text-sm ${
                                  lead.postgrid_status === "sent"
                                    ? "bg-blue-500 text-white"
                                    : "bg-secondary text-secondary-foreground"
                                }`}
                              >
                                Postgrid: {lead.postgrid_status}
                              </div>
                              <div
                                className={`px-3 py-1 rounded-md text-sm ${
                                  lead.instantly_status === "sent"
                                    ? "bg-purple-500 text-white"
                                    : "bg-secondary text-secondary-foreground"
                                }`}
                              >
                                Instantly: {lead.instantly_status}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <div className="flex justify-center items-center gap-4 mt-8">
                <Button
                  variant="outline"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="bg-secondary hover:bg-secondary/80 text-secondary-foreground border-radius-class"
                >
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Previous
                </Button>
                <span className="text-sm">
                  Page {data.pagination.current_page} of{" "}
                  {data.pagination.total_pages}
                </span>
                <Button
                  variant="outline"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === data.pagination.total_pages}
                  className="bg-secondary hover:bg-secondary/80 text-secondary-foreground border-radius-class"
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </ClerkProvider>
  );
}
