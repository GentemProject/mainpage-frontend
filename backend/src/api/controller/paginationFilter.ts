export async function paginationFilter(filter, model, req, res) {
  let cuantity = await model.countDocuments(filter);
  /*   console.log(filter); */
  try {
    const perPage: number = parseInt(req.query.limit as string);
    /*     console.log(perPage, 'perPage'); */
    const totalPages: number = Math.round(cuantity / perPage);
    /*     console.log(totalPages, 'totalPages'); */
    let page: number = parseInt(req.query.skip as string);
    /*     console.log(page, 'page'); */
    if (page > totalPages) {
      res.end();
    }
    const show = page * perPage;
    /*     console.log(show, 'show'); */

    model
      .find(filter)
      .skip(show)
      .limit(perPage)
      .sort({ _id: -1 })
      .then(data =>
        res.json({
          totalOrg: cuantity,
          page: page,
          totalPages: totalPages,
          data: data,
        }),
      )
      .catch(error => console.log(error));
  } catch (error) {
    return res.status(500).json(error);
  }
}
