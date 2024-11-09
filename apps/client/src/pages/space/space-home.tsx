import {Container} from "@mantine/core";
import SpaceHomeTabs from "@/features/space/components/space-home-tabs.tsx";
import {useParams} from "react-router-dom";
import {useGetSpaceBySlugQuery} from "@/features/space/queries/space-query.ts";
import {getAppName} from "@/lib/config.ts";
import {Helmet} from "react-helmet-async";
import { t } from "@lingui/macro";

export default function SpaceHome() {
    const {spaceSlug} = useParams();
    const {data: space} = useGetSpaceBySlugQuery(spaceSlug);

    return (
        <>
            <Helmet>
                <title>{space?.name || t({id: "space.home.overview", message: "Overview"})} - {getAppName()}</title>
            </Helmet>
            <Container size={"800"} pt="xl">
                {space && <SpaceHomeTabs/>}
            </Container>
        </>
    );
}
