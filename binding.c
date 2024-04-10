#include <assert.h>
#include <bare.h>
#include <js.h>
#include <utf.h>

static js_value_t *
bare_addon_hello (js_env_t *env, js_callback_info_t *info) {
  int err;

  js_value_t *result;
  err = js_create_string_utf8(env, (utf8_t *) "Hello addon", -1, &result);
  if (err < 0) return NULL;

  return result;
}

static js_value_t *
bare_addon_exports (js_env_t *env, js_value_t *exports) {
  int err;

#define V(name, fn) \
  { \
    js_value_t *val; \
    err = js_create_function(env, name, -1, fn, NULL, &val); \
    assert(err == 0); \
    err = js_set_named_property(env, exports, name, val); \
    assert(err == 0); \
  }

  V("hello", bare_addon_hello)
#undef V

  return exports;
}

BARE_MODULE(bare_addon, bare_addon_exports)
