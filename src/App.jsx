import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useColorMode, Button, Flex } from "@chakra-ui/react";
import Index from "./pages/Index.jsx";
import AddPost from "./pages/AddPost.jsx";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Router>
      <Flex justifyContent="space-between" p={4} bg={colorMode === "light" ? "gray.100" : "gray.900"}>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? "Dark Mode" : "Light Mode"}
        </Button>
      </Flex>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/add-post" element={<AddPost />} />
      </Routes>
    </Router>
  );
}

export default App;