import {Container, Space} from "@mantine/core";
import HomeTabs from "@/features/home/components/home-tabs";
import SpaceGrid from "@/features/space/components/space-grid.tsx";
import {getAppName} from "@/lib/config.ts";
import {Helmet} from "react-helmet-async";
import { Trans } from "@lingui/macro";

export default function Home() {
    return (
        <>
            <Helmet>
                <title><Trans>Home - {getAppName()}</Trans></title>
            </Helmet>
            <Container size={"800"} pt="xl">
                <SpaceGrid/>

                <Space h="xl"/>

                <HomeTabs/>
            </Container>
        </>
    );
}
