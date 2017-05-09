class LocalStorage {
    constructor( identifier ){
        this.identifier = identifier
        this.load()
    }

    save( data ){
        if( typeof data === 'object' )
            data = JSON.stringify( data )
        localStorage.setItem( this.identifier, data )
        this.load()
    }

    load(){
        let str = localStorage.getItem( this.identifier )
        let data
        try {
            data = JSON.parse( str )
        } catch( e ) {
            data = str
        }
        this.value = data
        return data
    }

}

class Contact extends LocalStorage {

    constructor( identifier ){
        super( identifier )
        if( this.value === null )
            this.value = {}
    }

    get( username ){
        return this.value
    }

    find( username ){
        return this.value[username] !== undefined
    }

    add( username, email ){
        this.value[username] = email
        this.save( this.value )
        this.load()
    }

    remove( username ){
        delete this.value[username]
        this.save( this.value )
        this.load()
    }

}