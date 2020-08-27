import cat from '../../api/categories.json'

//  useAllCategories

// Trae todas las Categorias que tiene una ONG
// Se usa así:
// useEffect(() => {
//    useAllCategories ({ setCommunityArray, communityWorkWith })
// }, [communityWorkWith])

export function useAllCategories(props: any) {
  const { setCommunityArray, communityWorkWith } = props
  const catdata = cat.data
  return catdata.map((target: any) => {
    return communityWorkWith.map((communityId: number) => {
      return target.cat_id.some((categorieId: number) => {
        categorieId === communityId
          ? setCommunityArray((communityArray: []) => [
              ...communityArray,
              target.cat_name,
            ])
          : false
      })
    })
  })
}

// useOneCategorie

// Trae todas las Categorias que tiene una ONG
// Se usa así:
// useEffect(() => {
//    useOneCategorie ({ setCommunity, communityWorkWith })
// }, [communityWorkWith])

export function useOneCategorie(props: any) {
  const { setCommunity, communityWorkWith } = props
  const catdata = cat.data
  return catdata.map((target: any) => {
    return communityWorkWith.some((categorieId: number) => {
      const categoriaArray = []
      categoriaArray.push(categorieId)
      categoriaArray[0] === target.cat_id[0]
        ? setCommunity((community: []) => [...community, target.cat_name])
        : false
    })
  })
}
