
import { Portfolio as PortfolioComponent } from "@/components/trading/Portfolio";
import { NavigationBar } from "@/components/navigation/NavigationBar";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <NavigationBar />
      
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-white mb-2">Portfolio</h1>
          <p className="text-slate-400">Manage and track your investments</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="lg:col-span-1">
            <PortfolioComponent />
          </div>
          
          <div className="lg:col-span-1 space-y-6">
            {/* Performance Charts could go here */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-4">Performance Overview</h3>
              <div className="text-slate-400">
                Portfolio performance charts will be displayed here
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
