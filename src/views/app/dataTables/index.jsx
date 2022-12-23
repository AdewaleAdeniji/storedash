import { Box, SimpleGrid } from "@chakra-ui/react";
import DevelopmentTable from "views/app/dataTables/components/DevelopmentTable";
import CheckTable from "views/app/dataTables/components/CheckTable";
import ColumnsTable from "views/app/dataTables/components/ColumnsTable";
import ComplexTable from "views/app/dataTables/components/ComplexTable";
import {
  columnsDataDevelopment,
  columnsDataCheck,
  columnsDataColumns,
  columnsDataComplex,
} from "views/app/dataTables/variables/columnsData";
import tableDataDevelopment from "views/app/dataTables/variables/tableDataDevelopment.json";
import tableDataCheck from "views/app/dataTables/variables/tableDataCheck.json";
import tableDataColumns from "views/app/dataTables/variables/tableDataColumns.json";
import tableDataComplex from "views/app/dataTables/variables/tableDataComplex.json";
import React from "react";

export default function Settings() {
  // Chakra Color Mode
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        mb='20px'
        columns={{ sm: 1, md: 2 }}
        spacing={{ base: "20px", xl: "20px" }}>
        <DevelopmentTable
          columnsData={columnsDataDevelopment}
          tableData={tableDataDevelopment}
        />
        <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
        <ColumnsTable
          columnsData={columnsDataColumns}
          tableData={tableDataColumns}
        />
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
      </SimpleGrid>
    </Box>
  );
}
