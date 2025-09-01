export type QueryFile = {
  [key: string]: string | QueryFile;
};

export function createNewGroup(
  base: QueryFile,
  path: string[] = []
): QueryFile {
  if (path.length > 0) {
    return createNewGroup(base[path[0]] as any, path.slice(1));
  }

  let groupNum = 1;
  let groupName = `Group ${groupNum}`;
  while (base[groupName]) {
    groupNum += 1;
    groupName = `Group ${groupNum}`;
  }
  return { ...base, [groupName]: {} };
}

export function createNewQueryRecursive(
  base: QueryFile,
  path: string[] = []
): { contents: QueryFile; queryPath: string[] } {
  if (path.length > 0) {
    let result = createNewQueryRecursive(base[path[0]] as any, path.slice(1));
    return {
      contents: { ...base, [path[0]]: result.contents },
      queryPath: [path[0], ...result.queryPath],
    };
  }

  let queryNum = 1;
  let queryName = `Query ${queryNum}`;
  while (base[queryName]) {
    queryNum += 1;
    queryName = `Query ${queryNum}`;
  }
  return { contents: { ...base, [queryName]: '' }, queryPath: [queryName] };
}

export function deleteQueryItem(base: QueryFile, path: string[]): QueryFile {
  if (path.length > 1) {
    let result = deleteQueryItem(base[path[0]] as any, path.slice(1));
    return { ...base, [path[0]]: result };
  }
  return Object.fromEntries(
    Object.entries(base).filter((entry) => entry[0] != path[0])
  );
}

export function placeQueryItem(
  base: QueryFile,
  path: string[],
  item: string | QueryFile
): QueryFile {
  if (path.length > 1) {
    let result = placeQueryItem(base[path[0]] as any, path.slice(1), item);
    return { ...base, [path[0]]: result };
  }
  return {
    ...Object.fromEntries(
      Object.entries(base).filter((entry) => entry[0] != path[0])
    ),
    [path[0]]: item,
  };
}

export function updateQueryItem(
  base: QueryFile,
  path: string[],
  newContents: QueryFile | string
): QueryFile {
  if (path.length > 1) {
    let result = updateQueryItem(
      base[path[0]] as any,
      path.slice(1),
      newContents
    );
    return { ...base, [path[0]]: result };
  }
  return {
    ...Object.fromEntries(
      Object.entries(base).filter((entry) => entry[0] != path[0])
    ),
    [path[0]]: newContents,
  };
}

export function queryItemExists(base: QueryFile, path: string[]): boolean {
  if (path.length > 1) {
    return (
      typeof base[path[0]] === 'object' &&
      queryItemExists(base[path[0]] as any, path.slice(1))
    );
  }
  return base[path[0]] !== undefined;
}

export function duplicateQueryItem(
  base: QueryFile,
  path: string[] = []
): { contents: QueryFile; queryPath: string[] } {
  if (path.length > 1) {
    let result = duplicateQueryItem(base[path[0]] as any, path.slice(1));
    return {
      contents: { ...base, [path[0]]: result.contents },
      queryPath: [path[0], ...result.queryPath],
    };
  }

  let queryNum = 2;
  let queryName = `${path[0]} ${queryNum}`;
  while (base[queryName]) {
    queryNum += 1;
    queryName = `${path[0]} ${queryNum}`;
  }
  return {
    contents: { ...base, [queryName]: base[path[0]] },
    queryPath: [queryName],
  };
}

export function getQueryItem(
  base: QueryFile,
  path: string[]
): QueryFile | string {
  if (path.length > 1) return getQueryItem(base[path[0]] as any, path.slice(1));
  return base[path[0]];
}

export function moveQueryItem(
  base: QueryFile,
  sourcePath: string[],
  destPath: string[]
): QueryFile {
  let item = getQueryItem(base, sourcePath);
  let result = deleteQueryItem(base, sourcePath);
  return placeQueryItem(result, destPath, item);
}
