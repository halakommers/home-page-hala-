import { Switch, Route, Router as WouterRouter } from "wouter";
import { UIProvider } from "@/contexts/UIContext";
import NotFound from "@/pages/not-found";
import Landing from "@/pages/Landing";
import ConceptLanding from "@/pages/ConceptLanding";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import HelpCenter from "@/pages/HelpCenter";

function Router() {
  return (
    <Switch>
      <Route path="/concept" component={ConceptLanding} />
      <Route path="/" component={Landing} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/help" component={HelpCenter} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <UIProvider>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
    </UIProvider>
  );
}

export default App;
