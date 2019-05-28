import HomePage from "../components/HomePage";
import React, { useState } from "react";
import { connect, ContactListContainer } from "./containers";

const HomePageConnected = connect({
    component: HomePage,
    to: ContactListContainer,
    with: (c: any) => ({
        handleSearchTextChange: c.fetch,
        contacts: c.state.contacts,
        isLoading: false
    })
});

export default () => <HomePageConnected />