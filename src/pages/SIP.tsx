
import { NavigationBar } from "@/components/navigation/NavigationBar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PiggyBank, Plus, Calendar, DollarSign } from "lucide-react";

const SIP = () => {
  const activeSIPs = [
    { id: 1, fund: "Nifty 50 Index Fund", amount: "$500", frequency: "Monthly", nextDate: "2024-01-15" },
    { id: 2, fund: "Technology Sector Fund", amount: "$300", frequency: "Monthly", nextDate: "2024-01-20" },
    { id: 3, fund: "Emerging Markets Fund", amount: "$200", frequency: "Weekly", nextDate: "2024-01-08" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <NavigationBar />
      
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">SIP Investments</h1>
            <p className="text-slate-400">Systematic Investment Plans for long-term wealth creation</p>
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            <Plus className="h-4 w-4 mr-2" />
            Create New SIP
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <PiggyBank className="h-5 w-5 text-emerald-400" />
                <span>Active SIPs</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-white">{activeSIPs.length}</p>
              <p className="text-sm text-slate-400">Running investments</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <DollarSign className="h-5 w-5 text-emerald-400" />
                <span>Monthly Investment</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-white">$1,000</p>
              <p className="text-sm text-slate-400">Total monthly commitment</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-emerald-400" />
                <span>Next Investment</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-white">Jan 8</p>
              <p className="text-sm text-slate-400">Upcoming SIP date</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Active SIP Plans</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {activeSIPs.map((sip) => (
              <div key={sip.id} className="flex items-center justify-between p-4 rounded-lg bg-slate-700/30">
                <div>
                  <h3 className="font-semibold text-white">{sip.fund}</h3>
                  <p className="text-sm text-slate-400">{sip.frequency} • Next: {sip.nextDate}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-white">{sip.amount}</p>
                  <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-600">
                    Manage
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SIP;
