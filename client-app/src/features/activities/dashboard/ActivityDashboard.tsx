import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponents";
import { useStore } from "../../../app/stores/store";
import ActivityFilters from "./ActivityFilters";
import ActivityList from "./ActivityList";

export default observer(function ActivityDashboard() {

    const { activityStore } = useStore();
    const {loadActivities, activityReqistry}=activityStore;

    useEffect(() => {
        if(activityReqistry.size <= 1 ) loadActivities();
    }, [activityReqistry.size, loadActivities])

    if (activityStore.loadingInitial) return <LoadingComponent content='Loading activities...' />

    return (
        <Grid>
            <Grid.Column width="10">
                <ActivityList />
            </Grid.Column>
            <Grid.Column width="6">
                <h2>
                    <ActivityFilters />
                </h2>
            </Grid.Column>
        </Grid>
    )
}
)