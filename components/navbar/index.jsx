import Link from "next/link";
import Image from "next/image";
import { Flex, Spacer, Heading } from "@chakra-ui/react";
import logo from '../../src/svg/logo.svg';

export default function NavBar() {
  return (
    <>
      <Flex bg="white" h="100px" pr={150} pl={150} alignItems="center" bgGradient='linear(to-r, #000, #4D4B4B)'>
        <Spacer />
        <Flex alignItems="center" h="100%" cursor='pointer'>
          <Link href='/'><Image src={logo} alt='logo' /></Link>
        </Flex>
        <Spacer />
      </Flex>
    </>
  );
}
