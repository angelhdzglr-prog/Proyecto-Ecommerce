export default function ProductSpecs({ datos }) {
  return (
    <div>
      <div className="bg-bgSecond rounded-xl p-6 mb-4">
        <h2 className="text-primary text-2xl font-bold mb-2">
          Descripción
        </h2>

        <p>{datos.description}</p>
      </div>

      <div className="bg-bgSecond rounded-xl p-6 mb-4">
        <h2 className="text-primary text-2xl font-bold mb-2">
          Dimensiones
        </h2>

        <p>
          <strong className="text-accent">Ancho:</strong>{' '}
          {datos.dimensions.width}
        </p>

        <p>
          <strong className="text-accent">Altura:</strong>{' '}
          {datos.dimensions.height}
        </p>

        <p>
          <strong className="text-accent">Profundidad:</strong>{' '}
          {datos.dimensions.depth}
        </p>
      </div>
    </div>
  );
}