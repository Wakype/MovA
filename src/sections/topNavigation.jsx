"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/assets/images/animepops-bg.png";
import CustomInput from "../components/CustomInput";
import Link from "next/link";
import {
  Avatar,
  Button,
  IconButton,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const TopNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Drawer placement={"bottom"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody pb={100}>
            <div className="flex w-full items-center space-x-7">
              <Button
                width="100%"
                variant={"outline"}
                color={"#eb507f"}
                border={"1px solid #eb507f"}
                _hover={{ backgroundColor: "#eb507f", color: "white" }}
              >
                Login
              </Button>
              <Button
                width="100%"
                variant={"outline"}
                color={"#eb507f"}
                border={"1px solid #eb507f"}
                _hover={{ backgroundColor: "#eb507f", color: "white" }}
              >
                Register
              </Button>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <div
        className={`${
          isScrolled
            ? "h-[55px] bg-white drop-shadow-md lg:h-[70px]"
            : "h-[65px] bg-transparent lg:h-[100px]"
        } fixed top-0 z-[150] flex w-full items-center justify-between px-7 py-2 duration-500 lg:px-[50px]`}
      >
        <div className="hidden w-full lg:flex lg:items-center lg:justify-between">
          <section className="h-[80px] w-[80px]">
            <Link href={"/"}>
              <Image
                src={logo}
                width="0"
                height="0"
                sizes="100vw"
                className="h-full w-full bg-cover"
                quality={100}
                loading="eager"
                style={{ objectFit: "cover", overflow: "hidden" }}
                alt="Logo"
              />
            </Link>
          </section>

          <section>
            <CustomInput
              id="search"
              title="Cari Sesuatu..."
              border={"1px solid #FE024E"}
              type="search"
              size="md"
              width="500px"
              _placeholder={{
                opacity: 1,
                color: isScrolled ? "black" : "white",
              }}
              // values={values.search}
              // handleChange={handleChange}
              // handleBlur={handleBlur}
              // isInvalid={!!errors?.search}
              // errorMessage={errors?.search}
              backgroundColor={isScrolled ? "white" : "transparent"}
            />
          </section>

          <section>
            <Avatar size={"sm"} />
          </section>
        </div>

        <div className="flex w-full items-center justify-between lg:hidden">
          <section className="h-[60px] w-[60px]">
            <Link href={"/"}>
              <Image
                src={logo}
                width="0"
                height="0"
                sizes="100vw"
                className="h-full w-full bg-cover"
                quality={100}
                loading="eager"
                style={{ objectFit: "cover", overflow: "hidden" }}
                alt="Logo"
              />
            </Link>
          </section>
          <section>
            <IconButton
              aria-label="Setting"
              icon={<HamburgerIcon color={"white"} />}
              size={"sm"}
              bg={"#EB507F"}
              _hover={{
                backgroundColor: "#FE024E",
              }}
              onClick={onOpen}
            />
          </section>
        </div>
      </div>
    </>
  );
};

export default TopNavigation;
