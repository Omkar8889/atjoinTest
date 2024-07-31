import React from 'react'
import { Page, Text, Image, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        border: '1px solid blue',
        width:'100%',
        display:'grid',
        gridTemplateColumns:'1fr 3fr',
        gridTemplateRows:'1fr 1fr 1fr' 
    },
    image:{
        gridRowStart:'1',
        gridRowEnd:'-1'
    },
    userId:{
margin:"20px"
    },
    UserName:{
margin:"20px"
    },
    rank:{
margin:"20px"
    }
  });


function PDFFile({user}) {
 <Document>
    <Page size="A4" style={styles.page}>
        <Image src={user.Image} style={styles.image}></Image>
        <Text style={styles.userId}>{user.userId?user.userId:''}</Text>
        <Text style={styles.UserName}>{user.userName?user.userName:''}</Text>
        <Text style={styles.rank}>{user.rank?user.rank:''}</Text>
    </Page>
  </Document>
}

export default PDFFile
