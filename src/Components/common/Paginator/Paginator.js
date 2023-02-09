import s from './Paginator.module.css'

let Paginator = (props) => {
    let totalPages = Math.ceil(props.totalUsers / props.countUserOnPage)
    let pages = []
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
    }

    return (
        <div className={s.paginator}>
            {pages.map((pageNumber) => {
                return (
                    <span
                        key={pageNumber}
                        className={props.currentPage === pageNumber ? s.activeLink : " "}
                        onClick={() => props.onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </span>
                )
            })}
        </div>
    )
}

export default Paginator
