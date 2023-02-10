import { useState } from "react"
import s from "./Paginator.module.css"

let Paginator = ({ portionSize = 20, ...props }) => {
    let pagesCount = Math.ceil(props.totalItemsCount / props.countItemsPerPage)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let LeftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let RightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={s.paginator}>
            {portionNumber > 1 && (
                <button onClick={() => setPortionNumber(portionNumber - 1)}>
                    PREV
                </button>
            )}

            {pages
                .filter(
                    (p) =>
                        p >= LeftPortionPageNumber &&
                        p <= RightPortionPageNumber
                )
                .map((pageNumber) => {
                    return (
                        <span
                            key={pageNumber}
                            className={
                                props.currentPage === pageNumber
                                    ? s.activeLink
                                    : " "
                            }
                            onClick={() => props.onPageChange(pageNumber)}
                        >
                            {pageNumber}
                        </span>
                    )
                })}
            {portionNumber < portionCount && (
                <button onClick={() => setPortionNumber(portionNumber + 1)}>
                    NEXT
                </button>
            )}
        </div>
    )
}

export default Paginator
