import React from 'react';
import { Button, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import { useAppDispatch, useAppSelector } from './app/hooks/hooks';
import { RootState } from './app/store';
import { increment, decrement, goinitial } from './features/counterSlice';


function App(): React.JSX.Element {
  
  const dispatch = useAppDispatch();
  const deneme = useAppSelector((state: RootState) => state.value)

  return (
    <SafeAreaView style = {{justifyContent: 'center', alignItems: 'center'}}>
      <Text style = {{fontSize: 20,  marginVertical: 20, fontWeight: 'bold'}}>
        Redux Template
      </Text>
      <Text>
        {deneme}
      </Text>
        <TouchableOpacity style = {{margin: 10, height: 50, width: 200, backgroundColor: "blue", borderRadius: 10, justifyContent: 'center', alignItems: 'center', }} onPress={() => dispatch(increment())}>
          <Text style = {{fontSize: 16, color: "white"}}>
            Increase   (+)
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style = {{margin: 10, height: 50, width: 200, backgroundColor: "red", borderRadius: 10, justifyContent: 'center', alignItems: 'center', }} onPress={() => dispatch(decrement())}>
          <Text style = {{fontSize: 16, color: "white"}}>
            Decrease   (-)
          </Text>
        </TouchableOpacity>
     
      <Button title='main value' onPress={() => dispatch(goinitial())} />

    </SafeAreaView>
  );
}


export default App;
