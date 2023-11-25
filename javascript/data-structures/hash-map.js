class HashMap {

  constructor(length=53) {
      this.keyMap = new Array(length);
  }

  // basic hash function, example working with lowercase strings
  _hash(key) {
      let total = 0;
      let PRIME_NUMBER = 31;
      for (let i=0; i < Math.min(key.length, 100); i++) {
          let char = key[i];
          let value = char.charCodeAt(0) - 96;
          total = (total * PRIME_NUMBER + value) % this.keyMap.length;
      }
      return total;
  }

  set(key, value) {
      let index = this._hash(key)
      if(!this.keyMap[index]) {
          this.keyMap[index] = [];
      }
      
      // if this key already exists in the hashMap, overwite
      for(let i = 0; i < this.keyMap[index].length; i++) {
          let [k,v] = this.keyMap[index][i];
          if(key === k){
              this.keyMap[index][i] = [key, value];
              return index;
          }
      }
      
      this.keyMap[index].push([key, value]);
      return index;
  }

  get(key) {
      let index = this._hash(key);
      if(this.keyMap[index]) {
          for(let i=0; i < this.keyMap[index].length; i++) {
              let [k,v] = this.keyMap[index][i];
              if(key === k) {
                  return v;
              }
          }
      }
      
      return undefined;
  }

  keys() {
      let keys = [];
      for(let i=0; i < this.keyMap.length; i++) {
          if(this.keyMap[i] === undefined) continue;
          for(let j=0; j< this.keyMap[i].length; j++) {
              if(this.keyMap[i][j]) {
                  keys.push(this.keyMap[i][j][0])
              } 
          }
      }
      return keys;
  }

  values() {
      let values = [];
      for(let i=0; i < this.keyMap.length; i++) {
          if(this.keyMap[i] === undefined) continue;
          for(let j=0; j< this.keyMap[i].length; j++) {
              if(this.keyMap[i][j]) {
                  // have we seen it before
                  let nextVal = this.keyMap[i][j][1];
                  let seen = false;
                  for(let v=0; v < values.length; v++) {
                      if(values[v] === nextVal){
                          seen = true;
                          break;
                      }
                  }
                  if(!seen) {
                      values.push(nextVal);
                  }
                  
              } 
          }
      }
      return values;
  }
}

let hashMap = new HashMap(17);
hashMap.set("hello", "world");
hashMap.set("goodbye", "see ya");
hashMap.set("howya", "going");
hashMap.set("whatya", "doing");
hashMap.set("lets", "go!");
hashMap.set("letsget", "going"); // duplicate value will not be returned in values()
hashMap.set("hello", "mate"); // overwriting value at key


