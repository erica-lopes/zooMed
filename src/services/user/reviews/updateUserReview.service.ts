import { Reviews } from "../../../entities/reviews.entity";
import { reviewsRepository } from "../../../utilities/repositories";

const updateUserReviewService = async (
  review: string,
  idReview: string
): Promise<Partial<Reviews>> => {
  await reviewsRepository.update(idReview, {
    review,
  });

  const reviewFind = await reviewsRepository.findOneBy({ id: idReview });
  return reviewFind!;
};

export default updateUserReviewService;
