import React, { Component } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default class Search extends Component {
    render() {
        return (
            <GooglePlacesAutocomplete
                placeholder="Qual o destino?"
                placeholderTextColor="#333"
                // onPress={() => { }}
                query={{
                    key: "AIzaSyAtuG77eNLPhsO28nm5Ua_DDSClMxYypdA",
                    language: "pt"
                }}
                TextInputProps={{
                    autoCapitalize: "none",
                    autoCorrect: false
                }}
                fetchDetails
                enablePoweredByContainer={false}

                styles={{
                    container: {},
                    textInputContainer: {},
                    textInput: {},
                    listView: {},
                    description: {},
                    row: {},
                    
                }}
            />
        );
    }
}
