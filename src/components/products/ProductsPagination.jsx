export default function ProductsPagination({ page, setPage, totalPages }) {
  return (
    <div className="pagination">
      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
        className="btnPag"
      >
        Anterior
      </button>

      <span>
        Página {page} de {totalPages}
      </span>

      <button
        onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={page === totalPages}
        className="btnPag"
      >
        Siguiente
      </button>
    </div>
  );
}
