import { useEffect, useState } from "react";
import { Container, Text, VStack, Heading, Box, Image, Link, useColorMode, Button, HStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  const [posts, setPosts] = useState([]);
  const { colorMode } = useColorMode();

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(savedPosts);
  }, []);

  const handleDelete = (index) => {
    const updatedPosts = posts.filter((_, i) => i !== index);
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg={colorMode === "light" ? "white" : "gray.800"} color={colorMode === "light" ? "black" : "white"}>
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Blog</Heading>
        <Box boxSize="sm">
          <Image src="/images/blog-banner.jpg" alt="Blog Banner" />
        </Box>
        <Text fontSize="lg" textAlign="center">
          Hi there! I'm [Your Name], and this is my personal blog where I share my thoughts, experiences, and stories. Stay tuned for updates!
        </Text>
        <Link as={RouterLink} to="/about" color="teal.500" fontSize="lg">Learn more about me</Link>
        <Link as={RouterLink} to="/add-post" color="teal.500" fontSize="lg">Add New Post</Link>
        {posts.map((post, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px" width="100%" bg={colorMode === "light" ? "gray.100" : "gray.700"}>
            <HStack justifyContent="space-between">
              <Heading fontSize="xl">{post.title}</Heading>
              <Button colorScheme="red" onClick={() => handleDelete(index)}>Delete</Button>
            </HStack>
            {post.image && <Image src={post.image} alt={post.title} />}
            <Text mt={4}>{post.content}</Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;