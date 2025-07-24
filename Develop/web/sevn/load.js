 //load start
    const load = (srcList, pos = "head") => {

        //loadlink start
        const loadlink = (currentLink) =>{
            currentLink = srcList
            var extensionStart = 0
            var extensionEnd = currentLink.length
            var extension = ""
            if (currentLink.length > 0) {

                for (let i = extensionEnd; i > 0; i--) {
                    if (currentLink[i] == ".") {
                        extensionStart = i;
                        extension = currentLink.slice(extensionStart, extensionEnd)
                        break
                    }
                }

                if (extension == ".js") {
                    self.loadjs(currentLink, pos)
                } else if (extension == ".css") {
                    self.loadcss(currentLink, pos)
                } else if (extension == ".scss") {
                    // loadscss(getfile(currentLink))
                    self.getfile(currentLink, (res) => { loadscss(res, currentLink) })
                } else if (extension == ".html") {
                    self.loadhtml(currentLink, pos)
                } else {
                    // console.log('loading object')
                    self.loadMetaFromObject(currentLink, pos)
                }
            }
        }
        //loadlink end


        try {
            if (pos == undefined) { var pos = 'head' }
            // if  not array convert it to array
            if (Array.isArray(srcList) == false){
                srcList = srcList.replaceAll(/\s+/g,",").replaceAll(/,{2,}/g,",").split(",")
            }
            if (srcList.length > 0) {
                for (var i = 0; i < srcList.length; i++) {
                    loadlink(srcList[i])
                }
            } 




            // if (Array.isArray(srcList) == true) {// if array
            //     if (srcList.length > 0) {
            //         for (var i = 0; i < srcList.length; i++) {
            //             loadlink(srcList[i])
            //         }
            //     } 
                
            // }
            // //if not array and is string
            // else if (Array.isArray(srcList) == false) {
            //     loadlink(srcList)
            // }
        }
        catch (err) {
            console.log(srcList)
            console.error(err)
        }

    }
    //load end