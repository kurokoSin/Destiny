import { createId } from '@paralleldrive/cuid2';
import { useState, useEffect } from 'react';

const CreateIdByClient: string = (() => {
  const [CookieId, setCookieId] = useState<string|null>(null);
  useEffect( () => {
    const _Id = window.localStorage.getItem("CookieId");
    const _NewId = createId();
    if (_Id === null) {
      window.localStorage.setItem("CookieId", _NewId);
    }
    setCookieId( _Id ? _Id : _NewId);
  }, []);

  return CookieId ? CookieId.toString() : "".toString() ;
})();
export default CreateIdByClient;
