import cat from '../api/categories.json'

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

// useOneCategorie

// Trae todas las Categorias que tiene una ONG
// Se usa así:
// useEffect(() => {
//    useOneCategorie ({ setCause, causeId })
// }, [causeId])

export function useOneCategorie(props: any) {
  const { setCause, causeId } = props
  const catdata = cat.data
  return catdata.map((target: any) => {
    causeId === target.cat_id[0] ? setCause(target.cat_name) : false
  })
}
