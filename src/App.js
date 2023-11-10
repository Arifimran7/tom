import PageContent from "./PageContent";
import PageFooter from "./pageFooter";
import PageHeader from "./pageHeader";
import Project1 from "./project1";

export default function App() {
  return (
    <div className="App">
      <PageHeader />
      {/* <PageContent /> */}
      <Project1 />
      <PageFooter />
    </div>
  );
}
