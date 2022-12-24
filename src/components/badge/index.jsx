import { Badge } from "@chakra-ui/react"
import React from 'react';

export const OrderBadge = ({ status }) => {
    const scheme = status === 'PENDING' ? 'blue' : status === 'NEW' ? 'blue' : status === "CANCELLED" ? 'red' : status === "FAILED" ? 'red' : 'green';
    return (
        <Badge colorScheme={scheme}>{status}</Badge>
    )
}