import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import { useAuth } from "../../components/auth/components/AuthProvider";
import { GetPendingRequestsQuery, useGetPendingRequestsQuery } from "../../generated/graphql";
import createAccessClient from "../../graphql/clients/accessClient";
import { LoadingScreen } from "../../components/lib";
import PendingRequestCard from "./components/PendingRequestCard";

export default function PendingRequestsView() {
    const { user, accessToken, refreshToken } = useAuth();

    const { data, isLoading } = useGetPendingRequestsQuery<GetPendingRequestsQuery, Error>(
        createAccessClient(accessToken!, refreshToken!),
        {
            input: {
                receiverId: user?.id!
            }
        },
        {
            onSuccess: (data: GetPendingRequestsQuery) => { },
            refetchInterval: 1000,
            enabled: !!user,
        },
    );

    return isLoading ? (
        <LoadingScreen />
    ) : (
        <Grid
            container
            spacing={5}
            direction="column"
            justifyContent="center"
            p={{ xs: 6, md: 10 }}
        >
            <Grid>
                <Typography
                    gutterBottom
                    variant="h1"
                    component="div"
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    Zaproszenia:
                </Typography>
            </Grid>
            {data?.getPendingRequests.length != 0 ? (
                data?.getPendingRequests.map((pendingRequest, i) => (
                    <Grid size={12}>
                        <PendingRequestCard item={pendingRequest.creator} />
                    </Grid>
                ))!
            ) : (
                <Typography
                    gutterBottom
                    variant="h1"
                    component="div"
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    Brak zaproszeń
                </Typography>
            )}
        </Grid>
    );
};
