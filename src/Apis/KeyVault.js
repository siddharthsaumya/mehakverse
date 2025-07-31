export async function getKeyValue(keyName) {
    const url = `https://sheet2api.com/v1/hmUuJlDpTdW5/mehak-website-key-vault/Sheet1?Key=${keyName}`;
  
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
  
      const data = await response.json();
      if (Array.isArray(data) && data.length > 0) {
        return data[0].Value;
      } else {
        throw new Error("Key not found or response is empty.");
      }
  
    } catch (error) {
      console.error("Error fetching key from KeyVault:", error.message);
      return null;
    }
  }
  