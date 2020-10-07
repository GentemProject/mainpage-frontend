export async function paginationFilter(filter, model, req, res) {
  let cuantity = await model.countDocuments(filter);
  try {
    const perPage: number = parseInt(req.query.limit as string);
    let totalPages: number = Math.floor(cuantity / perPage);
    let page: number = parseInt(req.query.skip as string);
    if (Math.round(cuantity - perPage * totalPages) === 0) {
      totalPages = totalPages - 1;
    }
    if (page > totalPages) {
      res.end();
    }
    const show = page * perPage;

    /*     model
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
      .catch(error => console.log(error)); */
    let datan;
    await model
      .find(filter)
      .skip(show)
      .limit(perPage)
      .sort({ _id: -1 })
      .then(data => {
        datan = data;
        return datan;
      })
      .catch(error => console.log(error));
    return await datan;
  } catch (error) {
    return res.status(500).json(error);
  }
}
