const useLoader = <T>(data: T | undefined): [boolean, T | undefined] => {
    const ifStillLoading = data === undefined;

    return [ifStillLoading, data];
}

export default useLoader;