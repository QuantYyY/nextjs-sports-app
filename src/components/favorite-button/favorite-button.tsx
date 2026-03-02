type Props = {
  isFavorite: boolean;
};

export const FavoriteButton = ({ isFavorite }: Props) => {
  return (
    <button>
      {isFavorite ? "Убрать из избранного" : "Добавить в избранное"}
    </button>
  );
};
