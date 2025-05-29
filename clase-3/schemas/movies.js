const z = require("zod");

const movieSchema = z.object({
  title: z.string({
    invalid_type_error: "Movie title must be a string",
  }),
  year: z.number().int().positive().min(1900).max(2025),
  director: z.string(),
  duration: z.number().int().positive(),
  rate: z.number().min(0).max(10).default(5),
  poster: z.string().url({
    message: "Poster must be a valid URL",
  }),
  genre: z.array(
    z.enum([
      "Action",
      "Crime",
      "Adventure",
      "Comedy",
      "Drama",
      "Fantasy",
      "Horror",
      "Thriller",
      "Scy-Fi",
    ])
  ),
});

function validateMovie(shape) {
  return movieSchema.safeParse(shape);
}

function validatePartialMovie(input) {
  return movieSchema.partial().safeParse(input);
}

module.exports = {
  validateMovie,
  validatePartialMovie,
};
