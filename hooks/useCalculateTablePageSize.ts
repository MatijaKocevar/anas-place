// hooks/useCalculatePageSize.ts
import { useState, useEffect, RefObject } from "react";

type UseCalculateTablePageSizeArgs = {
    loading: boolean;
    tableOptionsRef: RefObject<HTMLElement>;
    tableHeadRowRef: RefObject<HTMLElement>;
    tableBodyRef: RefObject<HTMLElement>;
};

const useCalculateTablePageSize = ({
    loading,
    tableOptionsRef,
    tableHeadRowRef,
    tableBodyRef,
}: UseCalculateTablePageSizeArgs) => {
    const [pageSize, setPageSize] = useState(5);

    useEffect(() => {
        const calculatePageSize = () => {
            if (loading) return;

            const mainChildrenContainer = document.getElementById("main-children-container");
            const tableBodyRows = tableBodyRef.current?.querySelectorAll(".table-body-row");

            if (
                !mainChildrenContainer ||
                !tableBodyRows?.length ||
                !tableOptionsRef.current ||
                !tableHeadRowRef.current
            ) {
                return;
            }

            const containerRectHeight = mainChildrenContainer.getBoundingClientRect().height;
            const rowHeight = tableBodyRows[0].getBoundingClientRect().height;
            const tableOptionsHeight = tableOptionsRef.current.getBoundingClientRect().height;
            const tableHeadRowHeight = tableHeadRowRef.current.getBoundingClientRect().height;

            const newSize = Math.floor(
                (containerRectHeight - tableOptionsHeight - tableHeadRowHeight) / rowHeight
            );

            setPageSize(newSize);
        };

        calculatePageSize();
        window.addEventListener("resize", calculatePageSize);

        return () => window.removeEventListener("resize", calculatePageSize);
    }, [loading, tableOptionsRef, tableHeadRowRef, tableBodyRef]);

    return pageSize;
};

export default useCalculateTablePageSize;
