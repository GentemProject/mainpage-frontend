import cat from '../../api/categories.json'

//  useAllCategories

// Trae todas las Categorias que tiene una ONG
// Se usa así:
// useEffect(() => {
//    useAllCategories ({ setCommunityArray, communityWorkWith })
// }, [communityWorkWith])

export function useAllCategories(props: any) {
  const { setCauseArray, causeId } = props
  const catdata = cat.data
  return catdata.map((target: any) => {
    return causeId.map((communityId: number) => {
      return target.cat_id.some((categorieId: number) => {
        categorieId === communityId
          ? setCauseArray((causeArray: []) => [...causeArray, target.cat_name])
          : false
      })
    })
  })
}
