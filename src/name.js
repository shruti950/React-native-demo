import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { gql, useQuery } from '@apollo/client';

const Name = () => {
  const GET_ALL_BANKS = gql`
  query GetAllBank($isAdminCreated: Boolean, $isBankExecutive: Boolean) {
    getAllBank(
      isAdminCreated: $isAdminCreated
      isBankExecutive: $isBankExecutive
    ) {
      id
      bankName
      IFSCCode
      schemeName
      standardRate
      optionalRate
      marginMax
      marginMin
      processFees
      address
      headPerson {
        id
        userName
        firstName
        lastName
      }
    }
  }
`;
const { data, refetch,error } = useQuery(GET_ALL_BANKS, {
  variables: {
    isAdminCreated: true
  },
  fetchPolicy: "network-only"
})
console.log("🚀 ~ file: name.js ~ line 37 ~ Name ~ data", data)

  return (
    <View>
      <Text>Name</Text>
    </View>
  )
}

export default Name

const styles = StyleSheet.create({})