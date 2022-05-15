import StylesProvider from "./styles-config/StylesProvider";
import IssuesList from "./components/view/issues/List";
import Header from "./components/shared/Header";

export const App = () => {
    return (
        <StylesProvider>
            <Header/>
            <IssuesList/>
        </StylesProvider>
    );
}
export default App;
