
/*You have to extract a portion of the file name as follows:

Assume it will start with date represented as long number
Followed by an underscore
You'll have then a filename with an extension
it will always have an extra extension at the end
*/

class FileNameExtractor {
    static extractFileName (dirtyFileName) {
        let pos = dirtyFileName.indexOf('_')+1;
      dirtyFileName = dirtyFileName.slice(pos);
      let secondpos = dirtyFileName.lastIndexOf('.');
      return dirtyFileName.substring(0,secondpos)
    }
}

//even shorter

class FileNameExtractor {
    static extractFileName (dirtyFileName) {
        return dirtyFileName.slice(dirtyFileName.indexOf('_') + 1, dirtyFileName.lastIndexOf('.'));
    }
}