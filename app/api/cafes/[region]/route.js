import { NextResponse } from "next/server";
import { collection, getDocs, query, where } from "firebase/firestore";
import {db} from '@/firebase/config';

//import { mockData } from "@/data/products";
//import { revalidatePath, revalidateTag } from "next/cache";

/*const sleep = (timer) => {

    return new Promise ((resolve) => setTimeout(resolve,timer))
}*/

export async function GET(request, {params}){

    const {region} = params

    const productRef=collection(db, "productos");
    //const querySnapshot = await getDocs(productRef) 

    const q = region === "todos"
                ? productRef
                : query (productRef, where ('type', '==', region))

    const querySnapshot = await getDocs(q)           


    const docs = querySnapshot.docs.map(doc => doc.data())

    
    return NextResponse.json(docs)




    //export async function GET(request, {params}){
    /* const {region} = params

    const productosRef = collection(db, "productos");

    const q = region === 'todos' 
    ? productosRef 
    : query(productosRef,where('type', '==', region))
    
    const querySnapshot = await getDocs(q)

    const docs = querySnapshot.docs.map(doc => doc.data())

    return NextResponse.json(docs)*/


    /* const { region } = params
    const productosRef = collection(db, "productos")
    const q = region === 'todos' 
                ? productosRef
                : query(productosRef, where('type', '==', region))
    const querySnapshot = await getDocs(q)

    const docs =  querySnapshot.map(doc => doc.data())

    return NextResponse.json(docs) */


//    const data = region === 'todos' ? mockData : mockData.filter(item => item.type === region)
//    await sleep(2000)    
    //revalidatePath('/cages/[region]')
//    return NextResponse.json(data)

}