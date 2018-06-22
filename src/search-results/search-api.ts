export default {
  search: async function(term: string): Promise<Array<any>> {
    // solr endpoint
    const host = 'http://voyagerdemo.com/';
    const path = 'daily/solr/v0/select';
    const fields = 'id,name:[name],thumb:[thumbURL],abstract,description'; // fields we want returned
    const api = `${host}${path}?q=${term}&fl=${fields}&wt=json&rows=20`;
    const call = await fetch(api);
    const json = await call.json();
    return json.response.docs;
  }
}
