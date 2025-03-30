export const getRandomArrayElementFunction = (anArray) => () =>
{
    return anArray[Math.floor(Math.random() * anArray.length)]
}